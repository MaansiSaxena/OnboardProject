Imports System.Windows.Forms
Imports Layer
Imports Layer.GetTask
Imports Newtonsoft.Json

Public Class Dashboard

    Inherits System.Web.UI.Page

    Private _Class1 As New Methods()

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Not Me.IsPostBack Then
            Me.GetData("Status", "AssignedTo", "Priority")


        End If
    End Sub

    Protected Sub AddTask_Click(sender As Object, e As EventArgs) Handles AddTask.Click
        Response.Redirect("InsertData.aspx")
    End Sub
    Protected Sub FilterButton_Click(sender As Object, e As EventArgs) Handles FilterButton.Click

        Try
            Dim assignby As String
            Dim status As String = Convert.ToString(Filter1.Text)
            If (Filter2.Text = "AssignedBy Me") Then
                assignby = "AssignedBy"
            End If
            If (Filter2.Text = "AssignedTo Me") Then
                assignby = "AssignedTo"
            End If
            Dim priority As String = Convert.ToString(Filter3.Text)
            Me.GetData(status, assignby, priority)

        Catch ex As Exception
        End Try
    End Sub

    Protected Sub LogoutButton_Click(sender As Object, e As EventArgs) Handles Logout1.Click
        Try
            GlobalVariables.UserName = ""
            Response.Redirect("Login.aspx")
        Catch ex As Exception
        End Try
    End Sub


    Protected Sub ViewData_OnRowDeleting(sender As Object, e As GridViewDeleteEventArgs)
        Dim Id = Convert.ToInt32(ViewData.DataKeys(e.RowIndex).Value)

        Dim ans As DialogResult = MessageBox.Show("Delete the record", "Save", MessageBoxButtons.YesNoCancel, MessageBoxIcon.Question)
        If ans = DialogResult.Yes Then
            _Class1.Delete(Id)
        Else
            Response.Redirect("Dashboard.aspx")

        End If
    End Sub

    Public Sub GetData(statusfilter As String, assign As String, priority As String)
        Name1.Text = GlobalVariables.UserName
        Dim readData = _Class1.GetData(statusfilter, assign, priority)
        If (readData.IsSuccessStatusCode) Then
            Dim displayRecords = readData.Content.ReadAsStringAsync().Result
            Dim display As List(Of GetTaskData) = JsonConvert.DeserializeObject(Of List(Of GetTaskData))(displayRecords)
            ViewData.DataSource = display
            ViewData.DataBind()

        End If
    End Sub

    Protected Function ViewData_OnRowEditing(sender As Object, e As GridViewEditEventArgs)
        Response.Redirect("Edit.aspx")
        Me.GetData("Status", "AssignedTo", "Priority")

    End Function

    Protected Sub ViewData_OnRowCancel(sender As Object, e As GridViewCancelEditEventArgs)
        ViewData.EditIndex = -1
        Me.GetData("Status", "AssignedTo", "Priority")
    End Sub

    Protected Sub ResetButton_Click(sender As Object, e As EventArgs) Handles ResetButton.Click
        Try
            Filter1.Text = "Status"
            Filter2.Text = "AssignedTo Me"
            Filter3.Text = "Priority"
            Me.GetData("Status", "AssignedTo", "Priority")

        Catch ex As Exception
        End Try
    End Sub

    Protected Sub ViewData_SelectedIndexChanged(sender As Object, e As EventArgs) Handles ViewData.SelectedIndexChanged

    End Sub
End Class


