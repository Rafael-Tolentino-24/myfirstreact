import httpclient from "../commons/httpclient"

const employeeService = () =>{
    return httpclient.get('/employees')
}
export default {employeeService}