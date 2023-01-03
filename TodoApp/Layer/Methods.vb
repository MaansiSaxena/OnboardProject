Imports System.Data.Common
Imports System.Data.SqlClient
Imports System.Net.Http
Imports System.Text
Imports System.Web
'Imports Azure
Imports Layer.GetTask
Imports Newtonsoft.Json
Imports Layer


Public Class Methods : Implements IMethods
    Public Function LogInn(log As UserLog) As String Implements IMethods.LogInn
        Try
            Dim client As New HttpClient
            Dim url = $"https://localhost:44310/api/Task/Login"
            Dim payload = Newtonsoft.Json.JsonConvert.SerializeObject(log)
            Dim buffer = Encoding.UTF8.GetBytes(payload)
            Dim bytes = New Net.Http.ByteArrayContent(buffer)
            bytes.Headers.ContentType = New Net.Http.Headers.MediaTypeHeaderValue("application/json")

            Dim request = client.PostAsync(url, bytes)
            request.Wait()
            Dim username As String
            Dim res = request.Result
            If (res.IsSuccessStatusCode) Then
                Dim readTask = res.Content.ReadAsStringAsync()
                Dim sign1 = readTask.Result
                GlobalVariables.UserName = log.Username
                Return sign1
            End If

        Catch ex As Exception
            Throw ex
        End Try
    End Function

    Public Sub Delete(Id As Integer) Implements IMethods.Delete
        Dim Client = New HttpClient()
        Client.BaseAddress = New Uri("https://localhost:44310/api/Task/")
        Dim response = Client.DeleteAsync("DeleteTask/" + Id.ToString())

    End Sub


    Public Function GetData(statusfilter As String, assign As String, priority As String) Implements IMethods.GetData
        Dim hc As HttpClient = New HttpClient()
        ' Dim fil As String = GlobalVariables.UserName + "/" + Filter
        Dim consumeApi = hc.GetAsync("https://localhost:44310/api/Task/ReadTask/" + GlobalVariables.UserName + "/" + statusfilter + "/" + assign + "/" + priority)
        consumeApi.Wait()
        Dim readData = consumeApi.Result
        Return readData
    End Function

    Public Function GetDropDown() Implements IMethods.GetDropDown

        Dim hc As HttpClient = New HttpClient()
        hc.BaseAddress = New Uri("https://localhost:44310/api/Task/")
        Dim consumeApi = hc.GetAsync("GetUserList")
        consumeApi.Wait()
        Dim userlist = consumeApi.Result
        Return userlist
    End Function

    Public Async Function GetId(Id As Integer) As Task Implements IMethods.GetId
        Dim Client = New HttpClient()
        Client.BaseAddress = New Uri("https://localhost:44310/api/Task")
        Dim consumeApi = Client.GetAsync("/TaskById/" + Id.ToString())
        consumeApi.Wait()
        Dim readData = consumeApi.Result

        If (readData.IsSuccessStatusCode) Then
            Dim displayRecords = readData.Content.ReadAsStringAsync().Result
            Dim display As List(Of GetTaskData) = JsonConvert.DeserializeObject(Of List(Of GetTaskData))(displayRecords)

        End If

    End Function

    Public Function GetTaskById(id As Integer) As DataTable Implements IMethods.GetTaskById
        Dim con = New SqlConnection("Data Source=BHAVNAWKS593;Initial Catalog=CrudOperation;Integrated Security=True")
        Dim ds = New DataTable()

        Try
            Dim Str = "select * from Task_Table where Id=" & id
            Dim com = New SqlCommand(Str, con)
            Dim sqlda = New SqlDataAdapter(com)
            con.Open()
            sqlda.Fill(ds)
            con.Close()
        Catch ex As Exception
            Throw ex
        End Try
        Return ds
    End Function

    Public Async Function Add(task As PostTasks) As Task Implements IMethods.Add

        Dim Client = New HttpClient()
        Dim payload = Newtonsoft.Json.JsonConvert.SerializeObject(task)
        Dim buffer = Encoding.UTF8.GetBytes(payload)
        Dim bytes = New Net.Http.ByteArrayContent(buffer)
        bytes.Headers.ContentType = New Net.Http.Headers.MediaTypeHeaderValue("application/json")
        Dim response As HttpResponseMessage = Await Client.PostAsync("https://localhost:44310/api/Task/CreateTask", bytes).ConfigureAwait(False)
        response.EnsureSuccessStatusCode()
        If (response.IsSuccessStatusCode) Then
            Dim result As String
            result = Await response.Content.ReadAsStringAsync()
        End If

    End Function

    Public Async Function Update(task As PostTasks) As Task Implements IMethods.Update
        Dim Client = New HttpClient()
        Dim payload = Newtonsoft.Json.JsonConvert.SerializeObject(task)
        Dim buffer = Encoding.UTF8.GetBytes(payload)
        Dim bytes = New Net.Http.ByteArrayContent(buffer)
        bytes.Headers.ContentType = New Net.Http.Headers.MediaTypeHeaderValue("application/json")
        Dim response As HttpResponseMessage = Await Client.PutAsync("https://localhost:44310/api/Task/UpdateTask", bytes).ConfigureAwait(False)
        response.EnsureSuccessStatusCode()
        If (response.IsSuccessStatusCode) Then
            Dim result As String
            result = Await response.Content.ReadAsStringAsync()
        End If
        'Return response

    End Function

End Class

Public Class GlobalVariables
    Public Shared UserName As String
End Class

