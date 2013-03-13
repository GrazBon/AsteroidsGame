#pragma strict
var laserspeed:int;

function Start () {

}

function Update () {
	//all the laser needs is forward motion
	transform.Translate(Vector3.up * laserspeed * Time.deltaTime);
}

//when the laser exits the scene
function OnBecameInvisible()
{
	Destroy(this.gameObject);
}