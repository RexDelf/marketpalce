package com.dominic.marketplace.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Advert {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO, generator = "advert_seq")
    private Long id;
    private String title;
    private String description;
    private Integer price;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate published;
    private String location;

    @OneToMany(
            mappedBy = "advert",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private Set<AdvertImage> advertImages;
}
