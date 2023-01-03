Imports System.Net
Imports System.Net.Http
Imports Newtonsoft.Json
Imports System.Threading.Tasks
Imports Layer

Public Class InsertData
    Inherits Page

    Private _Class1 As New Methods()
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Not Me.IsPostBack Then
            Me.GetDropDown()
        End If

    End Sub

    Protected Sub GetDropDown()
        Dim readData = _Class1.GetDropDown()

        If (readData.IsSuccessStatusCode) Then
            Dim displayRecords = readData.Content.ReadAsStringAsync().Result()
            Dim display As List(Of String) = JsonConvert.DeserializeObject(Of List(Of String))(displayRecords)
            DropDownAssign.DataSource = display
            DropDownAssign.DataBind()

        End If

    End Sub

    Protected Sub InsertButton_Click(sender As Object, e As EventArgs) Handles InsertButton.Click

        Try
            If TextTitle.Text Is "" Then
                RequiredFieldValidator1.Enabled = True
            Else
                RequiredFieldValidator1.Enabled = False
            End If

            Dim task As PostTasks = New PostTasks()
            task.Id = 0
            task.Title = Convert.ToString(TextTitle.Text)
            task.Description = TextDescription.InnerText
            task.Status = Convert.ToString(DropDownStatus.Text)
            task.AssignedTo = Convert.ToString(DropDownAssign.Text)
            task.Priority = Convert.ToString(DropDownPriority.Text)
            task.DueDate = Convert.ToDateTime(Calendar1.Text)


            task.AssignedBy = GlobalVariables.UserName
            _Class1.Add(task)
            Response.Redirect("~/Dashboard.aspx")
        Catch ex As Exception
        End Try
    End Sub

    Protected Sub Back_Click(sender As Object, e As EventArgs) Handles BackButton1.Click
        Response.Redirect("Dashboard.aspx")
    End Sub

End Class




