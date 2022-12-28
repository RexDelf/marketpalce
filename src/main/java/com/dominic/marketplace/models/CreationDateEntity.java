package com.dominic.marketplace.models;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Data
@MappedSuperclass
public class CreationDateEntity {
    @Column(updatable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;
}
