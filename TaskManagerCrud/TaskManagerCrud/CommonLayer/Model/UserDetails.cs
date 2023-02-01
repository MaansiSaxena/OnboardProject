using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskManagerCrud.CommonLayer.Model
{
    public class UserDetails
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
    public class CreateUserResponse
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
    }
}
