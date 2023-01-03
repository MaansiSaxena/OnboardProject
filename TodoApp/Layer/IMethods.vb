Public Interface IMethods

    Function LogInn(log As UserLog) As String
    Sub Delete(Id As Integer)
    Function GetData(Filter As String, assignby As String, priority As String)
    Function GetDropDown()
    Function GetId(Id As Integer) As Task
    Function GetTaskById(id As Integer) As DataTable
    Function Add(task As PostTasks) As Task
    Function Update(task As PostTasks) As Task

End Interface
