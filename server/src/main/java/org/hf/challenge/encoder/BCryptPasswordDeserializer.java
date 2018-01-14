package org.hf.challenge.encoder;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;

public class BCryptPasswordDeserializer extends JsonDeserializer<String> {

	private final BCryptPasswordEncoder encoder;
	
	@Autowired
	BCryptPasswordDeserializer(final BCryptPasswordEncoder encoder){
		this.encoder = encoder;
	}
	
	@Override
	public String  deserialize(JsonParser jsonParser, DeserializationContext deserializationContext)
			throws IOException, JsonProcessingException {
		ObjectCodec oc = jsonParser.getCodec();
        JsonNode node = oc.readTree(jsonParser);
        
        String encodedPassword = encoder.encode(node.asText());
        return encodedPassword;
	}

}
