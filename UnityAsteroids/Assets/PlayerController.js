#pragma strict
var normalSpeed:int;
var turboSpeed:int;
//this is the slot for the laser prefab
var laserprefab:Rigidbody;

function Start () {

}

function Update () {

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

}