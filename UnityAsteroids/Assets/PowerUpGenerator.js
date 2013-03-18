#pragma strict
var powerup:Rigidbody;

function Start () {
	//Invoke repeating
	//wait 1 sec before generating a powerup and then create a powerup every 5 seconds.
	InvokeRepeating("createPowerup",1.0,5.0);
}

function createPowerUp()
{
	//position of powerup. Rightmost, y=0, z=1, rotation 0
	Instantiate(powerup,Vector3(BorderController.rightmost,0,1),Quaternion.identity);
}

function Update () {

}