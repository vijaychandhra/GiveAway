package com.example.demo.Class;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
@Document(collection = "Product")
public class Product {
   @Id
   private ObjectId id;
   
   public ObjectId getId() {
	return id;
}
public void setId(ObjectId id) {
	this.id = id;
}
private String name;
   private String image;
   private String brand;
   private String category;
   private String description;
    private int rating;
    private int numReviews; 
    private int price;
    private int countInStock;
	private List<Review> r;

	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public int getNumReviews() {
		return numReviews;
	}
	public void setNumReviews(int numReviews) {
		this.numReviews = numReviews;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getCountInStock() {
		return countInStock;
	}
	public void setCountInStock(int countInStock) {
		this.countInStock = countInStock;
	}

	
	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", image=" + image + ", brand=" + brand + ", category="
				+ category + ", description=" + description + ", rating=" + rating + ", numReviews=" + numReviews
				+ ", price=" + price + ", countInStock=" + countInStock + ", reviews=" + r + "]";
	}
	public List<Review> getR() {
		return r;
	}
	public void setR(List<Review> r) {
		this.r = r;
	}
    
    
 
  }


