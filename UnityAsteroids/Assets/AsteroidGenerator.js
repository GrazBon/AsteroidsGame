#pragma strict
var asteroidprefab:Rigidbody;

//function that generates any number of asteroids
function createasteroids(numberofasteroids:int)
{
	var counter:int=0;
	var xpos:int=0;
	var ypos:int=0;
	var zpos:int=1;
	
	for(counter=0;counter<numberofasteroids;counter++)
	{
		xpos = Random.Range(BorderController.leftmost,BorderController.rightmost);
		ypos = Random.Range(BorderController.bottommost,BorderController.topmost);
		zpos = 1;
		Instantiate(asteroidprefab,Vector3(xpos,ypos,zpos),Quaternion.identity);
	}
}
 
function Start () {
	createasteroids(3);
	yield WaitForSeconds(3);
	createasteroids(6);
	yield WaitForSeconds(10);
	createasteroids(10);
	yield WaitForSeconds(10);
	createasteroids(6);
}

function Update () {

}