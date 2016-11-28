#pragma strict

var obj : GameObject;
var script : SceneScript;

obj = GameObject.Find("SceneScript");
script = obj.GetComponent(SceneScript);

GetComponent.<Collider>().isTrigger = true;

function OnTriggerEnter(){
    Destroy(gameObject);

    script.score += 20;
    script.blockCt--;
}