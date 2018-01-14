package org.hf.challenge.security.service;

import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

import org.hf.challenge.entities.User;
import org.hf.challenge.exceptions.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class JsonWebTokenService implements TokenService {

	private static int tokenExpirationTime = 30;
	private final UserDetailsService userDetailsService;
	private final BCryptPasswordEncoder encoder;
	@Value("security.token.secret.key")
    private String tokenKey;
	
	@Autowired
	public JsonWebTokenService(final UserDetailsService userDetailsService,final BCryptPasswordEncoder encoder) {
	    this.userDetailsService = userDetailsService;
	    this.encoder = encoder;
	}
	
	public static void setTokenExpirationTime(final int tokenExpirationTime) {
	    JsonWebTokenService.tokenExpirationTime = tokenExpirationTime;
	 }
	
	@Override
	public String getToken(String username, String password) {
        if (username == null || password == null) {
            return null;
        }
        final User user = (User) userDetailsService.loadUserByUsername(username);
        Map<String, Object> tokenData = new HashMap<>();
        if (encoder.matches(password, user.getPassword())) {
            tokenData.put("clientType", "user");
            tokenData.put("userID", user.getId());
            tokenData.put("username", user.getUsername());
            tokenData.put("token_create_date", LocalDateTime.now());
            Calendar calendar = Calendar.getInstance();
            calendar.add(Calendar.MINUTE, tokenExpirationTime);
            tokenData.put("token_expiration_date", calendar.getTime());
            JwtBuilder jwtBuilder = Jwts.builder();
            jwtBuilder.setExpiration(calendar.getTime());
            jwtBuilder.setClaims(tokenData);
            return jwtBuilder.signWith(SignatureAlgorithm.HS512, tokenKey).compact();

        } else {
        	throw new ServiceException("Authentication error", this.getClass().getName());
        }
	}
	
	
	
	

}
