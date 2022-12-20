package com.dominic.marketplace.models;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Data
@MappedSuperclass
public class CreationDateEntity {
    @Column(updatable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;
}
