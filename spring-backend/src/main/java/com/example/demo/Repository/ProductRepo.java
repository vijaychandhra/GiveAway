package com.example.demo.Repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Class.Product;
@Repository
public interface ProductRepo extends MongoRepository<Product,ObjectId>{

    Product findByName(String string);
    
}
