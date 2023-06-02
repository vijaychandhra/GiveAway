package com.example.demo.Repository;

import java.rmi.server.ObjID;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Class.Order;
@Repository
public interface Orders extends MongoRepository<Order,ObjectId>{
    
}
