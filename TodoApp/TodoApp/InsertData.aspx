<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="InsertData.aspx.vb" Inherits="TaskManager.InsertData" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
      <script src="Scripts/jquery-3.4.1.min.js"></script>

    <style type="text/css">
        #insert {
            height: 654px;
        }
        .auto-style1 {
            height: 22px;
            width: 77px;
        }
        .auto-style2 {
            width: 77px;
            height: 55px;
        }
        .auto-style3 {
            height: 45px;
            width: 77px;
        }
        .auto-style4 {
            width: 463px;
            height: 292px;
        }
        .auto-style6 {
            height: 30px;
        }
        .auto-style7 {
            height: 30px;
            width: 77px;
        }
        .auto-style9 {
            height: 44px;
        }
        .auto-style10 {
            height: 44px;
            width: 77px;
        }
        .auto-style11 {
            height: 55px;
        }
        .auto-style12 {
            margin-left: 32px;
        }
        .auto-style13 {
            width: 198px;
        }
        </style>
</head>
<body style="height: 492px">
    <form id="form1" runat="server">
        <div style ="background-color:cadetblue; font-size: xx-large; color:white;  padding:20px"; align ="center" >
       TASK MANAGER
   </div>
    <br />

    <div style="padding-left:35%; padding-top:50px";class="auto-style5">
        <table class="auto-style4">
           <tr>
               <td class="auto-style1">
                   <asp:Label ID="Label1" runat="server" Font-Bold="True" Font-Size="Medium" Text="Title"></asp:Label>
               </td>
               <td style="height: 22px">
                   <asp:TextBox ID="TextTitle" runat="server" Font-Size="Medium" Width="200px"></asp:TextBox>
                   <%--<asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="TextID" ErrorMessage="Field Is required."></asp:RequiredFieldValidator>--%>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="TextTitle" ErrorMessage="*Required Field " ForeColor="Red" Display="Dynamic" InitialValue="0"></asp:RequiredFieldValidator> 
               </td>
                <td style="height: 22px">
                    &nbsp;</td>
           </tr>
           <tr>
               <td class="auto-style7">
                   <asp:Label ID="Label2" runat="server" Font-Bold="True" Font-Size="Medium" Text="Description"></asp:Label>
               </td>
               <td class="auto-style6">
                   <textarea id="TextDescription" name="S1" rows="2"  runat="server" class="auto-style13" style="font-family: 'Times New Roman', Times, serif"></textarea>&nbsp;&nbsp;</td>
           </tr>
           <tr>
               <td class="auto-style10">
                   <asp:Label ID="Label3" runat="server" Font-Bold="True" Font-Size="Medium" Text="Assign To"></asp:Label>
                   
               </td>
               <td class="auto-style9">
                   <asp:DropDownList ID="DropDownAssign" runat="server" Font-Size="Medium" Width="200px">
                        
                       
                   </asp:DropDownList>
                   <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="DropDownAssign" ErrorMessage="*" ForeColor="Red" ValidateRequestMode="Disabled"></asp:RequiredFieldValidator>
                   
               </td>
           </tr>
           <tr>
               <td class="auto-style10">
                   <asp:Label ID="Label4" runat="server" Font-Bold="True" Font-Size="Medium" Text="Status"></asp:Label>
               </td>
               <td class="auto-style9">
                   <asp:DropDownList ID="DropDownStatus" runat="server" Font-Size="Medium" Width="200px">
                       <asp:ListItem>To Do</asp:ListItem>
                       <asp:ListItem>Completed</asp:ListItem>
                       <asp:ListItem>Pending</asp:ListItem>
                         <asp:ListItem Selected hidden>Status</asp:ListItem>
                   </asp:DropDownList>
               </td>
           </tr>
           <tr>
               <td class="auto-style2">
                     <asp:Label ID="Label6" runat="server" Font-Bold="True" Font-Size="Medium" Text="DueDate"></asp:Label>

               </td>
               <td class="auto-style11">
                    <asp:TextBox ID="Calendar1" runat="server" Font-Size="Medium" Width="200px" Font-Bold="True" TextMode="Date"></asp:TextBox>
                   <%--<asp:Calendar ID="Calendar1" runat="server" BackColor="White" BorderColor="#3366CC" BorderWidth="1px" CellPadding="1" DayNameFormat="Shortest" Font-Names="Verdana" Font-Size="8pt" ForeColor="#003399" Height="200px" Width="220px">
                       <DayHeaderStyle BackColor="#99CCCC" ForeColor="#336666" Height="1px" />
                       <NextPrevStyle Font-Size="8pt" ForeColor="#CCCCFF" />
                       <OtherMonthDayStyle ForeColor="#999999" />
                       <SelectedDayStyle BackColor="#009999" Font-Bold="True" ForeColor="#CCFF99" />
                       <SelectorStyle BackColor="#99CCCC" ForeColor="#336666" />
                       <TitleStyle BackColor="#003399" BorderColor="#3366CC" BorderWidth="1px" Font-Bold="True" Font-Size="10pt" ForeColor="#CCCCFF" Height="25px" />
                       <TodayDayStyle BackColor="#99CCCC" ForeColor="White" />
                       <WeekendDayStyle BackColor="#CCCCFF" />
                   </asp:Calendar>--%>
               </td>
           </tr>
           <tr>
               <td class="auto-style2">
                   <asp:Label ID="Label5" runat="server" Font-Bold="True" Font-Size="Medium" Text="Priority"></asp:Label>
               </td>
               <td class="auto-style11">
                   <asp:DropDownList ID="DropDownPriority" runat="server" Font-Size="Medium" Width="200px">
                       <asp:ListItem>High</asp:ListItem>
                       <asp:ListItem>Medium</asp:ListItem>
                       <asp:ListItem>Low</asp:ListItem>
                         <asp:ListItem Selected hidden>Priority</asp:ListItem>
                   </asp:DropDownList>
                   <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="DropDownPriority" ErrorMessage="*" ForeColor="Red"></asp:RequiredFieldValidator>
               </td>
           </tr>
            <tr>
                <td class="auto-style3">

                </td>
                 <td style="height: 45px">
                      <asp:Button ID="BackButton1" runat="server" BackColor="cadetblue" BorderColor="cadetblue" Font-Bold="True" Font-Size="Medium" ForeColor="White" Height="35px" Text="Back" Width="88px" />

                     <asp:Button ID="InsertButton" runat="server" BackColor="cadetblue" BorderColor="cadetblue" Font-Bold="True" Font-Size="Medium" ForeColor="White" Height="35px" Text="Insert" Width="103px" CssClass="auto-style12" />

                </td>

            </tr>
       </table>
    </div>
    </form>
</body>
</html>
