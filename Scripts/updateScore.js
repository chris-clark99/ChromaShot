var score1 : UI.Text;
function Update () {
	score1.text = PlayerPrefs.GetInt("score").ToString();
}