package com.thaisoftplus.mk.authentication;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.DisabledException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;

public class AuthenticationFailureListener extends SimpleUrlAuthenticationFailureHandler {
	public AuthenticationFailureListener() {
		super("/login?error");
	}
	
	@Override
	public void onAuthenticationFailure(HttpServletRequest request,
			HttpServletResponse response, AuthenticationException exception)
			throws IOException, ServletException {

		if(exception.getCause() instanceof DisabledException) {
			setDefaultFailureUrl("/reset-password");
		}
		
		super.onAuthenticationFailure(request, response, exception);
	}
}
