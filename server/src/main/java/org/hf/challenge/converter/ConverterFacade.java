package org.hf.challenge.converter;

import org.hf.challenge.converter.factory.ConverterFactory;
import org.hf.challenge.dto.UserDTO;
import org.hf.challenge.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ConverterFacade {

	@Autowired
	private ConverterFactory converterFactory;
	
	public User convert(final UserDTO dto) {
        return (User) converterFactory.getConverter(dto.getClass()).convert(dto);
    }
}
