#pragma strict
var normalSpeed:int;
var turboSpeed:int;
//this is the slot for the laser prefab
var laserprefab:Rigidbody;

//start time initialized to float and set to zero
var startTime:float=0.0;
var currentTime:float=0.0;
var elapsedTime:int=0;

function Start () {
	//The time the player stated playing
	startTime = Time.time;
	
}

function Update () 
{
	currentTime = Time.time;
	//il- hin li ghadda nahdmuh hekk
	elapsedTime = currentTime - startTime;
	
	//kill the game after 60s
	if(elapsedTime < 60)
	{
		//enable borders using the borders function in BorderController
		BorderController.EnableBorders(transform);
	
		//rotation of the cube
		transform.Rotate(Vector3.forward * -40 * Input.GetAxis("Horizontal") * Time.deltaTime);
		
		//fitr is the left ctrl key
		if(Input.GetKeyDown(KeyCode.L))
		{
			Instantiate(laserprefab,transform.position,transform.rotation); 
		}
		
		//speed / turbo speed
		if (Input.GetKey(KeyCode.Space))
		{
			transform.Translate(Vector3.up * turboSpeed * Input.GetAxis("Vertical") * Time.deltaTime);
		}
		else
		{
			//if not holding space bar
			transform.Translate(Vector3.up * normalSpeed * Input.GetAxis("Vertical") * Time.deltaTime);
		}
		
	}else{
		//game over
		print("game over");
	}
	
}

function OnGUI()
{
	//to show the timer
	GUI.Label(Rect(0,0,150,50),"Elapsed Time: "+elapsedTime);
}