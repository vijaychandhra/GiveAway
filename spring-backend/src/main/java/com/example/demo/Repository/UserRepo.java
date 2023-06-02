package com.example.demo.Repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Class.User;
@Repository
public interface UserRepo extends MongoRepository<User,String> {

    User findByName(String name);

    void deleteByName(String name);
    
}
