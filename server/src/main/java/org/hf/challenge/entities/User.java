package org.hf.challenge.entities;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="users")
public class User implements Serializable{

	private static final long serialVersionUID = -7795981259108326033L;
	@Id
	private String id;
	private String name;
	private String createdAt;

}
