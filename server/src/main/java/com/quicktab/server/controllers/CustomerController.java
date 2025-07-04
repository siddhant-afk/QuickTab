package com.quicktab.server.controllers;


import com.quicktab.server.models.Customer;
import com.quicktab.server.services.CustomerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {


    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public List<Customer> getAllCustomersByUser(){

        return customerService.getAllCustomersForCurrentUser();
    }

    @GetMapping("/{id}")
    public Customer getCustomer(@PathVariable Long id){
        return customerService.getCustomerById(id).orElseThrow(() -> new RuntimeException("Customer not found"));
    }

    @PostMapping
    public void addCustomer(@RequestBody Customer newCustomer){

        customerService.addCustomer(newCustomer);
    }

    @PutMapping("/{id}")
    public void updateCustomer(@PathVariable Long id, @RequestBody Customer updatedCustomer){

        customerService.updateCustomer(id,updatedCustomer);
    }

    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable Long id){
        customerService.deleteCustomer(id);
    }
}
