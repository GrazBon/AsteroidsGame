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

function OnTriggerEnter(other:Collider)
{
	//is the other object an asteroid?
	if(other.gameObject.tag == "asteroid")
	{
		//destroy the laser
		Destroy(this.gameObject);
		//destroy the asteroid
		Destroy(other.gameObject);
		//increment the score
		PlayerController.score++;
	}
}