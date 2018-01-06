package org.hf.challenge.entities;

import org.springframework.security.core.GrantedAuthority;

public enum Authority implements GrantedAuthority{
	USER,
	ADMIN,
	ANONYMOUS
	;

	@Override
	public String getAuthority() {
		return this.name();
	}

}
