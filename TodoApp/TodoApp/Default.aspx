<%@ Page Title="Home Page" Language="VB" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.vb" Inherits="TaskManager._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

  <%-- <div style ="background-color:black; font-size: xx-large; color:white"; align ="center">
       
       TASK MANAGER
   </div>
    <br />

    <div style="padding:15px">
        <table class="nav-justified">
           <tr>
               <td style="height: 22px">
                   <asp:Label ID="Label1" runat="server" Font-Bold="True" Font-Size="Medium" Text="Task"></asp:Label>
               </td>
               <td style="height: 22px">
                   <asp:TextBox ID="TextID" runat="server" Font-Size="Medium" Width="200px"></asp:TextBox>
               </td>
           </tr>
           <tr>
               <td>
                   <asp:Label ID="Label2" runat="server" Font-Bold="True" Font-Size="Medium" Text="Description"></asp:Label>
               </td>
               <td>
                   <textarea id="TextDescription" name="S1" rows="2"></textarea></td>
           </tr>
           <tr>
               <td>
                   <asp:Label ID="Label3" runat="server" Font-Bold="True" Font-Size="Medium" Text="Assign To"></asp:Label>
               </td>
               <td>
                   <asp:DropDownList ID="DropDownAssign" runat="server" Font-Size="Medium" Width="200px">
                       <asp:ListItem>Mansi</asp:ListItem>
                       <asp:ListItem>Aditya</asp:ListItem>
                       <asp:ListItem>Pratham</asp:ListItem>
                       <asp:ListItem>Raghav</asp:ListItem>
                       <asp:ListItem>Manish</asp:ListItem>
                       <asp:ListItem>Mohit</asp:ListItem>
                   </asp:DropDownList>
               </td>
           </tr>
           <tr>
               <td>
                   <asp:Label ID="Label4" runat="server" Font-Bold="True" Font-Size="Medium" Text="Status"></asp:Label>
               </td>
               <td>
                   <asp:DropDownList ID="DropDownStatus" runat="server" Font-Size="Medium" Width="200px">
                       <asp:ListItem>To Do</asp:ListItem>
                       <asp:ListItem>Completed</asp:ListItem>
                   </asp:DropDownList>
               </td>
           </tr>
           <tr>
               <td>
                   <asp:Label ID="Label5" runat="server" Font-Bold="True" Font-Size="Medium" Text="Priority"></asp:Label>
               </td>
               <td>
                   <asp:DropDownList ID="DropDownPriority" runat="server" Font-Size="Medium" Width="200px">
                       <asp:ListItem>High</asp:ListItem>
                       <asp:ListItem>Medium</asp:ListItem>
                       <asp:ListItem>Low</asp:ListItem>
                   </asp:DropDownList>
               </td>
           </tr>
            <tr>
                <td style="height: 45px">

                </td>
                 <td style="height: 45px">

                     <asp:Button ID="InsertButton" runat="server" BackColor="Black" BorderColor="Black" Font-Bold="True" Font-Size="Medium" ForeColor="White" Height="35px" Text="Insert" Width="106px" />

                </td>

            </tr>
       </table>
    </div>--%>
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
               </td>
                <td style="height: 22px">
                    &nbsp;</td>
           </tr>
           <tr>
               <td class="auto-style7">
                   <asp:Label ID="Label2" runat="server" Font-Bold="True" Font-Size="Medium" Text="Description"></asp:Label>
               </td>
               <td class="auto-style6">
                   <textarea id="TextDescription" name="S1" rows="2"  runat="server"></textarea>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
           </tr>
           <tr>
               <td class="auto-style10">
                   <asp:Label ID="Label3" runat="server" Font-Bold="True" Font-Size="Medium" Text="Assign To"></asp:Label>
               </td>
               <td class="auto-style9">
                   <asp:DropDownList ID="DropDownAssign" runat="server" Font-Size="Medium" Width="200px">
                       
                   </asp:DropDownList>
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
                   </asp:DropDownList>
               </td>
           </tr>
           <tr>
               <td class="auto-style2">
                     <asp:Label ID="Label6" runat="server" Font-Bold="True" Font-Size="Medium" Text="DueDate"></asp:Label>

               </td>
               <td class="auto-style11">
                   <asp:Calendar ID="Calendar1" runat="server" BackColor="White" BorderColor="#3366CC" BorderWidth="1px" CellPadding="1" DayNameFormat="Shortest" Font-Names="Verdana" Font-Size="8pt" ForeColor="#003399" Height="200px" Width="220px">
                       <DayHeaderStyle BackColor="#99CCCC" ForeColor="#336666" Height="1px" />
                       <NextPrevStyle Font-Size="8pt" ForeColor="#CCCCFF" />
                       <OtherMonthDayStyle ForeColor="#999999" />
                       <SelectedDayStyle BackColor="#009999" Font-Bold="True" ForeColor="#CCFF99" />
                       <SelectorStyle BackColor="#99CCCC" ForeColor="#336666" />
                       <TitleStyle BackColor="#003399" BorderColor="#3366CC" BorderWidth="1px" Font-Bold="True" Font-Size="10pt" ForeColor="#CCCCFF" Height="25px" />
                       <TodayDayStyle BackColor="#99CCCC" ForeColor="White" />
                       <WeekendDayStyle BackColor="#CCCCFF" />
                   </asp:Calendar>
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
                   </asp:DropDownList>
               </td>
           </tr>
            <tr>
                <td class="auto-style3">

                </td>
                 <td style="height: 45px">
                      <asp:Button ID="BackButton" runat="server" BackColor="cadetblue" BorderColor="cadetblue" Font-Bold="True" Font-Size="Medium" ForeColor="White" Height="35px" Text="Back" Width="88px" />

                     <asp:Button ID="InsertButton" runat="server" BackColor="cadetblue" BorderColor="cadetblue" Font-Bold="True" Font-Size="Medium" ForeColor="White" Height="35px" Text="Insert" Width="103px" CssClass="auto-style12" />

                </td>

            </tr>
       </table>
    </div>


</asp:Content>
