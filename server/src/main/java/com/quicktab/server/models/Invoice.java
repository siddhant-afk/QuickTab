package com.quicktab.server.models;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.persistence.Id;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private LocalDate issueDate;
    private LocalDate DueDate;

    @ManyToOne
    @JoinColumn(name = "customer_id" , nullable=false)
    private Customer customer;


    @OneToMany(mappedBy = "invoice",orphanRemoval = true,cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<InvoiceItem> items = new ArrayList<>();;


    private String Notes;

    private double totalAmount;

    @ManyToOne
    @JoinColumn(name="user_id",nullable=false)
    @JsonIgnore
    private User user;


    public Invoice() {
    }

    public Invoice(Long id, LocalDate issueDate, LocalDate dueDate, Customer customer, List<InvoiceItem> items, String notes, double totalAmount, User user) {
        Id = id;
        this.issueDate = issueDate;
        DueDate = dueDate;
        this.customer = customer;
        this.items = items;
        Notes = notes;
        this.totalAmount = totalAmount;
        this.user = user;
    }

    @JsonProperty("userId")
    public Long getUserId() {
        return user != null ? user.getId() : null;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public LocalDate getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(LocalDate issueDate) {
        this.issueDate = issueDate;
    }

    public LocalDate getDueDate() {
        return DueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        DueDate = dueDate;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<InvoiceItem> getItems() {
        return items;
    }

    public void setItems(List<InvoiceItem> items) {
        this.items = items;
    }

    public String getNotes() {
        return Notes;
    }

    public void setNotes(String notes) {
        Notes = notes;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

