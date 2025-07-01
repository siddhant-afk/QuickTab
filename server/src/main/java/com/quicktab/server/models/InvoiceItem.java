package com.quicktab.server.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
public class InvoiceItem {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long Id;

private String name;
private int quantity;
private double price;

@ManyToOne
@JoinColumn(name = "invoice_id", nullable = false)
@JsonBackReference
private Invoice invoice;

    public InvoiceItem() {
    }

    public InvoiceItem(Long id, String name, int quantity, double price, Invoice invoice) {
        Id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.invoice = invoice;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Invoice getInvoice() {
        return invoice;
    }

    public void setInvoice(Invoice invoice) {
        this.invoice = invoice;
    }
}
