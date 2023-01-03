Imports System.Net.Http
Imports System.Threading.Tasks
Imports Layer
Imports Newtonsoft.Json

Public Class Edit
    Inherits System.Web.UI.Page
    Private _Class1 As New Methods()

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Not Me.IsPostBack Then
            Me.GetDropDown()
            Edit1()
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


    Private Sub Edit1()
        Dim empid As Integer = Convert.ToInt32(Request.QueryString("Id").ToString())
        Dim dt As New DataTable
        dt = _Class1.GetTaskById(empid)

        TextTitle.Text = dt.Rows(0)(1).ToString()
        TextDescription.InnerText = dt.Rows(0)(2).ToString()
        DropDownStatus.Text = dt.Rows(0)(4).ToString()
        DropDownAssign.Text = dt.Rows(0)(6).ToString()
        DropDownPriority.Text = dt.Rows(0)(5).ToString()

        Dim strArr = dt.Rows(0)(3).ToString().Split(" ")
        TextBox1.Text = strArr(0).ToString()
    End Sub

    Protected Sub UpdateButton_Click(sender As Object, e As EventArgs) Handles UpdateButton.Click

        Try

            Dim empid As Integer = Convert.ToInt32(Request.QueryString("Id").ToString())
            Dim Title As String = Convert.ToString(TextTitle.Text)
            Dim Description As String = TextDescription.InnerText
            Dim Status As String = Convert.ToString(DropDownStatus.Text)
            Dim AssignedTo As String = Convert.ToString(DropDownAssign.Text)
            Dim Priority As String = Convert.ToString(DropDownPriority.Text)
            Dim DueDate As String = Convert.ToString(TextBox1.Text)

            Dim updatedata As New PostTasks
            updatedata.Id = empid
            updatedata.Title = Title
            updatedata.Description = Description
            updatedata.Status = Status
            updatedata.AssignedTo = AssignedTo
            updatedata.Priority = Priority
            updatedata.DueDate = DueDate

            _Class1.Update(updatedata)
            Response.Redirect("~/Dashboard.aspx")

        Catch ex As Exception
        End Try
    End Sub

    Protected Sub Back_Click(sender As Object, e As EventArgs) Handles BackButton.Click
        Response.Redirect("Dashboard.aspx")
    End Sub

End Class