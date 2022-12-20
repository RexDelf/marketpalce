package com.dominic.marketplace.dto;

import com.dominic.marketplace.models.AdvertImage;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AdvertCardDTO {
    private long id;
    private String title;
    private Integer price;
    private String location;
    private LocalDateTime createdAt;

    private AdvertImage advertImage;
}
