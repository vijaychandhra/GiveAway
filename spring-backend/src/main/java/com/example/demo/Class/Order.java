package com.example.demo.Class;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import com.example.demo.Repository.Orders;

import jakarta.persistence.Id;
public class Order {
    @Id
    private String id;
    private String name;
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    private Boolean isPaid;
    private Boolean isDelivered;
    private List<Product> orderItems;
    
    public Boolean getIsPaid() {
        return isPaid;
    }
    public void setIsPaid(Boolean isPaid) {
        this.isPaid = isPaid;
    }
    public Boolean getIsDelivered() {
        return isDelivered;
    }
    public void setIsDelivered(Boolean isDelivered) {
        this.isDelivered = isDelivered;
    }
    public List<Product> getOrderItems() {
        return orderItems;
    }
    public void setOrderItems(List<Product> orderItems) {
        this.orderItems = orderItems;
    }
    @Override
    public String toString() {
        return "Order [id=" + id + ", name=" + name + ", isPaid=" + isPaid + ", isDelivered=" + isDelivered
                + ", orderItems=" + orderItems + "]";
    }
   
    
}
