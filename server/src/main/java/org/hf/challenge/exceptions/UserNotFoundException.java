package org.hf.challenge.exceptions;

public class UserNotFoundException extends RuntimeException {

	private static final long serialVersionUID = -3187345742946357529L;

	public UserNotFoundException() {
        super();
    }

    public UserNotFoundException(final String message) {
        super(message);
    }

    public UserNotFoundException(final String message, final Throwable cause) {
        super(message, cause);
    }
}
