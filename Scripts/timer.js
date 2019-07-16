import UnityEngine.SceneManagement;
var timer : UI.Text;
var time : int;
while (true){
	time = int.Parse(timer.text);
	if(time==5){
		yield WaitForSeconds(1);
		time -= 1;
		timer.text = time.ToString();
	}
	else if (time > 1){
		time -= 1;
		timer.text = time.ToString();
	}
	else{
		SceneManager.LoadScene("score");
	}
	yield WaitForSeconds(1);
}