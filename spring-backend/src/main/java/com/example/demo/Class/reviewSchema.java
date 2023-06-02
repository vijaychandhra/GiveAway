package com.example.demo.Class;

public class reviewSchema {



private String name;
   private int rating;
    private String comment;
    private User u;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public User getU() {
		return u;
	}
	public void setU(User u) {
		this.u = u;
	}
	@Override
	public String toString() {
		return "reviewSchema [name=" + name + ", rating=" + rating + ", comment=" + comment + ", u=" + u + "]";
	}
    

}
