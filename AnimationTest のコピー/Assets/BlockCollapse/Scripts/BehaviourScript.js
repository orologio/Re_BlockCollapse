
#pragma strict
var Speed : float = 50.0;

function Update () {
    if(Input.GetButtonUp("Jump") && GetComponent.<Rigidbody>().velocity == Vector3(0, 0, 0)){
       GetComponent.<Rigidbody>().AddForce((transform.forward + transform.right)*Speed, ForceMode.VelocityChange);
    }
}

function OnCollosionEnter(){
    GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity.normalized*50;

    if(Mathf.Abs(GetComponent.<Rigidbody>().velocity.y) < 50){
    GetComponent.<Rigidbody>().velocity.y *= 50;
    }

    if(Mathf.Abs(GetComponent.<Rigidbody>().velocity.x) < 50){
    GetComponent.<Rigidbody>().velocity.x *= 50;
    }
}

