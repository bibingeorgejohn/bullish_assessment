package utils;

import org.json.simple.JSONObject;

public class utils {

	@SuppressWarnings("unchecked")
	public String create_message(String firstName, String lastName, String studentClass, String nationality, int id) {

		JSONObject jsonObject = new JSONObject();
		jsonObject.put("firstName", firstName);
		jsonObject.put("id", id);
		jsonObject.put("lastName", lastName);
		jsonObject.put("nationality", nationality);
		jsonObject.put("studentClass", studentClass);
		return jsonObject.toJSONString();
	}

}
