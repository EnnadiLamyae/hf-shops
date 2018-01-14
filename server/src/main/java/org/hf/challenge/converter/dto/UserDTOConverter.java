package org.hf.challenge.converter.dto;

import java.util.ArrayList;
import java.util.List;

import org.hf.challenge.dto.UserDTO;
import org.hf.challenge.entities.Authority;
import org.hf.challenge.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.crypto.password.PasswordEncoder;

public class UserDTOConverter implements Converter<UserDTO, User> {
	
	@Override
	public User convert(final UserDTO dto) {
        
		final User user = new User();

        user.setUsername(dto.getUsername());
        user.setName(dto.getName());
        user.setPassword(dto.getPassword());
        user.setAccountNonExpired(false);
        user.setCredentialsNonExpired(false);
        user.setEnabled(true);

        List<Authority> authorities = new ArrayList<>();
        authorities.add(Authority.USER);
        user.setAuthorities(authorities);
        return user;
	}

}
