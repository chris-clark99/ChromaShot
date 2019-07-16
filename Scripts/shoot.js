var projectile : GameObject;
var canvas : GameObject;
var random : Color;
var anim : Animation;
var timer : UI.Text;
function Start () {
	PlayerPrefs.SetInt("score", 0);
	Create();
}
function Create(){
	var sprite = projectile.GetComponent.<SpriteRenderer>();
	var m_RectTransform = projectile.GetComponent.<RectTransform>();
	var red = new Color(255, 0, 0);
	var yellow = new Color(255, 255, 0);
	var green = new Color(0, 255, 0);
	var lightblue = new Color(0, 255, 255);
	var darkblue = new Color(0, 0, 255);
	var pink = new Color(255, 0, 255);
	var list = [red, yellow, green, lightblue, darkblue, pink];
	random = list[Random.Range(0, list.Length)];
	sprite.color=random;
	m_RectTransform.anchoredPosition.x=Random.Range(-300, 300);
	anim.Play();
	timer.text = "5";
}
function Shoot(){
	var clone : GameObject;
    clone = Instantiate(projectile, projectile.transform.position, projectile.transform.rotation);
	clone.transform.SetParent(canvas.transform);
	clone.transform.localScale = new Vector3(25, 75, 1);
	clone.transform.localPosition.z = 1;
	var clonesprite = clone.GetComponent.<SpriteRenderer>();
	clonesprite.color=random;
	var rb = clone.GetComponent.<Rigidbody2D>();
	rb.AddForce(new Vector2(0, 1000));
	rb.simulated=true;
	Create();
}