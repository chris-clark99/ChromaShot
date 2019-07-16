var Text : UI.Text;
var Text1 : UI.Text;
Text.text = PlayerPrefs.GetInt("score").ToString();
if (PlayerPrefs.GetInt("score") > PlayerPrefs.GetInt("highScore")){
	PlayerPrefs.SetInt("highScore", PlayerPrefs.GetInt("score"));
	Text1.text = ("NEW HIGHSCORE!");
}
else{
	Text1.text = ("HIGHSCORE: " + PlayerPrefs.GetInt("highScore").ToString());
}