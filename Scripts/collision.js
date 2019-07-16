import UnityEngine.SceneManagement;
var clone : SpriteRenderer;
var score : int;
function Start(){
	score = PlayerPrefs.GetInt("score");
}
function OnCollisionEnter2D(coll: Collision2D) {
	clone = gameObject.GetComponent.<SpriteRenderer>();
    if ((coll.gameObject.name == "red") && (clone.color==new Color(255, 0, 0))){
		score+=1;
		PlayerPrefs.SetInt("score", score);
	}
	else if ((coll.gameObject.name == "yellow") && (clone.color==new Color(255, 255, 0))){
		score+=1;
		PlayerPrefs.SetInt("score", score);
	}
	else if ((coll.gameObject.name == "green") && (clone.color==new Color(0, 255, 0))){
		score+=1;
		PlayerPrefs.SetInt("score", score);
	}
	else if ((coll.gameObject.name == "lightblue") && (clone.color==new Color(0, 255, 255))){
		score+=1;
		PlayerPrefs.SetInt("score", score);
	}
	else if ((coll.gameObject.name == "darkblue") && (clone.color==new Color(0, 0, 255))){
		score+=1;
		PlayerPrefs.SetInt("score", score);
	}
	else if ((coll.gameObject.name == "pink") && (clone.color==new Color(255, 0, 255))){
		score+=1;
		PlayerPrefs.SetInt("score", score);
	}
	else if (coll.gameObject.name != "gun(Clone)"){
		SceneManager.LoadScene("score");
	}
	Destroy(gameObject);
}