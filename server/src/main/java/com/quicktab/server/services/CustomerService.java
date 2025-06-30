package com.quicktab.server.services;

import com.quicktab.server.models.Customer;
import com.quicktab.server.repositories.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }


    public List<Customer> getAllCustomers() {

        return customerRepository.findAll();
    }

    public Optional<Customer> getCustomerById(Long id) {

        return customerRepository.findById(id);
    }

    public void addCustomer(Customer newCustomer) {

        customerRepository.save(newCustomer);
    }

    public void updateCustomer(Long id, Customer updatedCustomer) {
        customerRepository.findById(id).map(customer -> {
            customer.setName(updatedCustomer.getName());
            customer.setEmail(updatedCustomer.getEmail());
            customer.setPhone(updatedCustomer.getPhone());
            return customerRepository.save(customer);
        });
    }

    public void deleteCustomer(Long id) {

        customerRepository.deleteById(id);
    }
}
