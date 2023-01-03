Public Class GetTask
    Public Class GetTaskResponse

        Public Property IsSuccess As Boolean
        Public Property Message As String
        Public Property getTaskData As List(Of Tasks)

    End Class

    Public Class GetTaskData

        Public Property Id As Integer
        Public Property Title As String

        Public Property Description As String
        Public Property DueDate As DateTime

        Public Property AssignedTo As String

        Public Property Status As String

        Public Property Priority As String
        Public Property AssignedBy As String

    End Class

End Class