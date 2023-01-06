﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskManagerCrud.CommonLayer.Model;
using static TaskManagerCrud.CommonLayer.Model.GetTask;

namespace TaskManagerCrud.ServiceLayer
{
    public interface ITaskServiceLayer
    {
        public Task<CreateTaskResponse> CreateTask(CreatetaskRequest taskData); 
        public Task<List<ReadTaskData>> ReadTask(string username, string status, string assignby, string priority);
        public Task<UpdateTaskResponse> UpdateTask(UpdateTaskRequest updatedData);
        public Task<DeleteTaskResponse> DeleteTask(int id);
        public Task<GetTaskResponse> GetTask(string request);
        public Task<RejectTaskResponse> RejectTask(int id);
        public Task<string> LoginModel(LoginModelRequest IdPass);
        public Task<List<string>> GetUserlist();
        public Task<GetTaskResponse> FilterTask(string request, string username);
        public Task<ReadTaskData> TaskById(string Id);
        public Task<Boolean> VBLogin(string username, string password);
        public Task<GetTaskResponse> GetTaskAssignedByMe(string username);
    }
}
