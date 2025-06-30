package com.quicktab.server.services;

import com.quicktab.server.models.Customer;
import com.quicktab.server.repositories.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }


    public List<Customer> getAllCustomers() {

        return customerRepository.findAll();
    }

}
