using UnityEngine;
using System.Collections;

public class Ball : MonoBehaviour {
	public Transform ball;

	void Update(){
		if(Input.GetButtonUp("Jump")){
			Instantiate (ball, transform.position, transform.rotation);
		}
	}
}
