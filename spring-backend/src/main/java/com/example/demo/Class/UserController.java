package com.example.demo.Class;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Repository.ProductRepo;
import com.example.demo.Repository.UserRepo;
@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class UserController {
    
    @Autowired
    UserRepo ur;

	@Autowired
	OrderRepo or;

	@Autowired
	ProductRepo pr;

	@GetMapping("/getproducts")
	public List<Product> getproducts() {
		return pr.findAll();	}	


	 @PostMapping("/write/{name}")
	 public void ggg(@RequestBody Review r,@PathVariable String name){
      Product p1=pr.findByName(name);

	 List<Review>l1=p1.getR();

	 if(l1!=null){
		l1.add(r);
		p1.setR(l1);
		pr.save(p1);
	 }
	 else{
		List<Review>l2=new ArrayList<Review>();
		l2.add(r);
		p1.setR(l2);
		pr.save(p1);
	 }
	 }
	

	
	
	private void ggetReviews() {
	}
	@RequestMapping("/p")
	public Product gettingproducts() {
		return pr.findByName("Airpods Wireless Bluetooth Headphones");	}	
	
	@RequestMapping("/c")
	public List<Product> changeproducts() {
		
		List<Product> list =pr.findAll();
		for(Product p:list) {
			if(p.getRating()==0) {
				pr.delete(p);
			}
			
		}
		return pr.findAll();	}
	
	
	
	
	@RequestMapping("/getallp")
	public List<Product> getallproducts() {
		return pr.findAll();	}
	
	
	


	
	@GetMapping("/getusers")
	public List<User> getusers() {
		return ur.findAll();	}	
	
		@RequestMapping("/ge/{name}")
	public User gett(@PathVariable String name) {
		 return ur.findByName(name);
	}
	
	@RequestMapping("/s")
	public User get() {
		User u= ur.findByName("Admin User");
		Shipping s=new Shipping();
		s.setAddress("1-11-110/18/6");
		s.setCity("hyd");
		s.setCountry("india");
		s.setPostalCode("500016");
		u.setShipping(s);
		ur.save(u);
		return u;}
	
	@RequestMapping("/")
	public void adduser() {
		User u=new User();
		u.setName("vi");
		u.setEmail("hii");
		ur.save(u);
	}

	@RequestMapping("/signin")
	public User signin(@RequestBody User u ) {
		User user= ur.findByName(u.getName());
		User u1=new User();
		if(user!=null) {
			if(user.getPassword().equals(u.getPassword()))
			return user;
			else
				return u1;
		}
		else
			return u1;
	}
    @RequestMapping("/gg")
    public User hi(){
        return ur.findByName("balu");
    }

    @PostMapping("/updateuser1")
    public void test (@RequestBody User u){
        System.out.println(u);
    }

	@PostMapping("/updateuser")
	public User updatUser(@RequestBody User u){
		System.out.println("update user");
		System.out.println(u.getId()+"lll");
		User u1=ur.findById(u.getId()).get();

		u1.setId(u.getName()+u.getPassword()+u1.getName().length()+u1.getPassword().length());
		u1.setName(u.getName());
		u1.setPassword(u.getPassword());
		u1.setEmail(u.getEmail());
		ur.save(u1);
		return u1;

	}
	@RequestMapping("/signup")
	public User signup(@RequestBody User u1 ) {
		String id=u1.getName()+u1.getPassword()+"123";

		Optional o= ur.findById(id);
		if(o.isEmpty()){
			System.out.println("new user");
		User u=new User();
		Shipping s=new Shipping();
		u.setId(id);
		u.setName(u1.getName());
		u.setEmail(u1.getEmail());
		u.setIsAdmin(false);
		u.setPassword(u1.getPassword());
		u.setShipping(s);
		return (ur.save(u));
		}
		else{

		User u=new User();
			return u;

			
		}
	}
	

	@GetMapping("/getorderbyname/{name}")
	public List<Order> getorderbyname(@PathVariable String name){
          if(name.equals("Admin User")){
			System.out.println(
				"hii"
			);
			List<Order> l3=new ArrayList<Order>();
			List<Order> l2=or.findAll();
			for(int i=0;i<l2.size()-1;i++){
				l3.add(l2.get(i));
			}
			return l3;
		  }
		  else{
		List<Order>l1= ur.findByName(name).getList();
		if(l1!=null){
			return l1;
		}
		else{
			List<Order> l2=new ArrayList<Order>();
			return l2;
		}
	}
	}


	
	
	@GetMapping("/getallorders")
	public List<Order> orders(){
		return or.findAll();
	}
	@RequestMapping("/updatecart/{id}")
	public List<Order> updatecart(@RequestBody List<Product> products, @PathVariable String id) {
		
        User u=ur.findById(id).get();

		if(u!=null){
        Order o=new Order();
		o.setIsDelivered(false);
		o.setIsPaid(true);
		o.setOrderItems(products);
		o.setName(u.getName());
		or.save(o);
		

		List<Order> l=u.getList();
		if(l!=null){
		l.add(o);
		u.setList(l);
		ur.deleteById(id);
		User u2=ur.save(u);
		return u2.getList();
		
	}
	else{
		ArrayList<Order> l2=new ArrayList<Order>();
		l2.add(o);
		u.setList(l2);
		ur.deleteById(id);
		User u2=ur.save(u);
		return u2.getList();
	}
}
		else{
		ArrayList<Order> l2=new ArrayList<Order>();

			return l2;
		}
	
	}

    @GetMapping("/getshipping/{name}")
	public Shipping getshipping(@PathVariable String name) {
	    User u= ur.findByName(name);
	   return u.getShipping();
		}	

		@PostMapping("/deleteuser/{id}")
		public List<User> deleteuser(@PathVariable String id){
			ur.deleteById(id);
			return ur.findAll();
		}
	
	@RequestMapping("/setshipping/{name}")
	public Shipping setshipping(@PathVariable String name,@RequestBody Shipping s) {
		System.out.println(s.toString());
	    User u= ur.findByName(name);
	    Shipping s1=new Shipping();
	    s1.setAddress(s.getAddress());
	    s1.setCity(s.getCity());
	    s1.setCountry(s.getCountry());
	    s1.setPostalCode(s.getPostalCode());
	    u.setShipping(s1);
	    ur.save(u);
	   return u.getShipping();
		}	
	

}
