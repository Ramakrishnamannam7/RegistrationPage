function getvalues()
{
    var username=document.getElementById("user").value.trim();
    var password=document.getElementById("fn").value.trim();
    localStorage.getItem("USER",username);
    localStorage.getItem("PASS",password);
    return;
}




function validate()
{
    var pass=document.getElementById("fn");
    var conf=document.getElementById("fn1");
    
    if(pass.value.trim()==conf.value.trim())
    {
        return true;
    }
    else
    {
        conf.style.border="solid 3px red";
        document.getElementById("l1").style.visibility="visible";
        return false;
    }

}

function check()
{
    var luser=document.getElementById("luser");
    var lpass=document.getElementById("lpass");
    if(USER==luser.value.trim())
    {
        if(PASS==lpass.value.trim())
        {
            return true;
        }
        else
        {
            alert("Password does not match");
            return false;
        }
    }
    else
    {
        alert("Username does not match");
        return false;
    }
}

