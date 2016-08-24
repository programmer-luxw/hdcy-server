/**
 * 
 */
package com.ymt.mirage.car.domain;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Entity
public class Activity extends Participation {

	public Activity() {
		setType(ParticipationType.ACTIVITY);
	}
	
	/**
     * 报名开始时间
     */
    @Temporal(TemporalType.TIMESTAMP)
    private Date signStartTime;
    /**
     * 报名结束时间
     */
    @Temporal(TemporalType.TIMESTAMP)
    private Date signEndTime;
	
	/**
	 * 客服
	 */
	@ManyToOne
	private CustomerService customerService;

	public CustomerService getCustomerService() {
		return customerService;
	}

	public void setCustomerService(CustomerService customerService) {
		this.customerService = customerService;
	}

	/**
	 * 活动简介图片
	 */
	@ElementCollection
	private List<String> images;
	/**
	 * 联系人电话
	 */
	private String contactPhone;
	/**
	 * 联系人微信
	 */
	private String contactWeixin;
	/**
	 * 报名人数限制
	 */
	private int peopleLimit;
	/**
	 * 活动费用
	 */
	private BigDecimal price;

	/**
	 * @return the contactPhone
	 */
	public String getContactPhone() {
		return contactPhone;
	}

	/**
	 * @param contactPhone
	 *            the contactPhone to set
	 */
	public void setContactPhone(String contactPhone) {
		this.contactPhone = contactPhone;
	}

	/**
	 * @return the contactWeixin
	 */
	public String getContactWeixin() {
		return contactWeixin;
	}

	/**
	 * @param contactWeixin
	 *            the contactWeixin to set
	 */
	public void setContactWeixin(String contactWeixin) {
		this.contactWeixin = contactWeixin;
	}

	/**
	 * @return the peopleLimit
	 */
	public int getPeopleLimit() {
		return peopleLimit;
	}

	/**
	 * @param peopleLimit
	 *            the peopleLimit to set
	 */
	public void setPeopleLimit(int peopleLimit) {
		this.peopleLimit = peopleLimit;
	}

	/**
	 * @return the price
	 */
	public BigDecimal getPrice() {
		return price;
	}

	/**
	 * @param price
	 *            the price to set
	 */
	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	/**
	 * @return the images
	 */
	public List<String> getImages() {
		return images;
	}

	/**
	 * @param images
	 *            the images to set
	 */
	public void setImages(List<String> images) {
		this.images = images;
	}

	/**
     * @return the signStartTime
     */
    public Date getSignStartTime() {
        return signStartTime;
    }

    /**
     * @param signStartTime the signStartTime to set
     */
    public void setSignStartTime(Date signStartTime) {
        this.signStartTime = signStartTime;
    }

    /**
     * @return the signEndTime
     */
    public Date getSignEndTime() {
        return signEndTime;
    }

    /**
     * @param signEndTime the signEndTime to set
     */
    public void setSignEndTime(Date signEndTime) {
        this.signEndTime = signEndTime;
    }

    @Override
	public String toString() {
		return "Activity [customerService=" + customerService + ", images=" + images + ", contactPhone=" + contactPhone
				+ ", contactWeixin=" + contactWeixin + ", peopleLimit=" + peopleLimit + ", price=" + price + "]";
	}
	
	
}
