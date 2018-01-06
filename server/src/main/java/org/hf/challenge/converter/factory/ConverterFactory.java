package org.hf.challenge.converter.factory;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.hf.challenge.converter.dto.UserDTOConverter;
import org.hf.challenge.dto.UserDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class ConverterFactory {

	private Map<Object, Converter> converters;

	public ConverterFactory() {
		super();
	}
	
	@PostConstruct
	public void init() {
		converters = new HashMap<>();
	    converters.put(UserDTO.class, new UserDTOConverter());
	}
	
	public Converter getConverter(final Object type) {
        return converters.get(type);
    }
	 
	 
}
