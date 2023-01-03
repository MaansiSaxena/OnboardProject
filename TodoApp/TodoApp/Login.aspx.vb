Imports System.Net.Http
Imports Newtonsoft.Json
Imports Layer
Imports System.Windows.Forms

Public Class Login
    Inherits System.Web.UI.Page

    Private _Class1 As New Methods()
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Not Me.IsPostBack Then
        End If
    End Sub

    Protected Sub LoginButton_Click(sender As Object, e As EventArgs) Handles LoginButton.Click

        Try

            Dim log As UserLog = New UserLog()
            log.Username = Convert.ToString(Login1.Text)
            log.Password = Convert.ToString(PassWord1.Text)

            Dim Count As String
            Count = _Class1.LogInn(log)
            If (Count IsNot "") Then
                Response.Redirect("Dashboard.aspx")
            Else
                Dim ans As DialogResult = MessageBox.Show("Details are not Correct!! ", "Invalid Credential", MessageBoxButtons.OK, MessageBoxIcon.Question)
                If ans = DialogResult.OK Then

                    Response.Redirect("Login.aspx")
                End If
            End If
        Catch ex As Exception
        End Try
    End Sub

End Class