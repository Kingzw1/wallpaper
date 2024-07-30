<template>
	<view class="preview">
		<swiper circular>
			<swiper-item v-for="item in 5">
				<image @click="maskChange" src="../../common/images/preview1.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="mask" v-show="maskState">
			<view class="goBack">
				
			</view>
			<view class="count">
				3 / 9
			</view>
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="footer">
				<view class="box" @click="clickInfo">
					<uni-icons type="info" size="23"></uni-icons>
					<view class="text">
						信息
					</view>
				</view>
				<view class="box">
					<uni-icons type="star" size="23"></uni-icons>
					<view class="text">
						5分
					</view>
				</view>
				<view class="box">
					<uni-icons type="download" size="23"></uni-icons>
					<view class="text">
						下载
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="infoPopup">
			<view class="infoPopup">
				<view class="popHeader">
					<view>
						
					</view>
					<view class="title">
						壁纸信息
					</view>
					<view class="close">
						<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
					</view>
				</view>
				<scroll-view scroll-y="true">
					<view class="content">
						<view class="row">
							<view class="label">
								壁纸ID：
							</view>
							<text selectable class="vale">1346546</text>
						</view>
						
						<view class="row">
							<view class="label">
								分类：
							</view>
							<text selectable class="vale  class">1346546</text>
						</view>
						
						<view class="row">
							<view class="label">
								发布者：
							</view>
							<text selectable class="vale">1346546</text>
						</view>
						
						<view class="row">
							<view class="label">
								评分：
							</view>
							<view class="value roteBox">
								<uni-rate readonly touchable value="3" size="16"/>
								<text selectable class="score">5分</text>
							</view>
							
						</view>
						
						<view class="row">
							<view class="label">
								摘要：
							</view>
							<text selectable class="vale">1346546</text>
						</view>
						
						<view class="row">
							<view class="label">
								标签：
							</view>
							<view class="value tabs">
								<view class="tab">
									标签
								</view>
							</view>
						</view>
						<view class="copyright">
							声明:本图片来自用户投稿,非商业使用,用户免费学习交流,如侵犯了您的权益,您可以拷贝壁纸id举报至平台,邮箱513894357@qq.com,管理将删除侵权壁纸,维护您的权益。
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	const maskState=ref(true);
	const infoPopup=ref(null)
	// 遮罩层
	const maskChange=()=>{
		maskState.value=!maskState.value
	}
	// 点击info弹窗
	const clickInfo=()=>{
		infoPopup.value.open('bottom')
	}
</script>

<style lang="scss" scoped>
.preview{
	width: 100%;
	height: 100vh;
	position: relative;
	swiper{
		width: 100%;
		height: 100%;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.mask{
		&>view{
			width: fit-content;
			position: absolute;
			left: 0;
			right: 0;
			margin: auto;
			color: #fff;
		}
		.goBack{}
		.count{
			top: 10vh;
			background: rgba(0, 0, 0, 0.3);
			font-size: 28rpx;
			border-radius: 40rpx;
			padding: 8rpx 28rpx;
			backdrop-filter: blur(10rpx);
		}
		.time{
			font-size: 140rpx;
			top: calc(10vh + 80rpx);
			font-weight: 100;
			line-height: 1em;
			text-shadow: 0 4rpx rgba(0,0,0,0.3);
		}
		.date{
			font-size: 34rpx;
			top: calc(10vh + 230rpx);
			text-shadow: 0 4rpx rgba(0,0,0,0.3);
		}
		.footer{
			background: rgba(255, 255, 255, 0.8);
			bottom: 10vh;
			height: 120rpx;
			width: 65vw;
			border-radius: 120rpx;
			color: #000;
			display: flex;
			justify-content: space-around;
			align-items: center;
			box-shadow: 0 2rpx rgba(0,0,0,0.1);
			backdrop-filter: blur(20rpx);
			.box{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				padding: 2rpx 12rpx;
				.text{
					font-size: 26rpx;
					color: #676767;
				}
			}
		}
	}
	.infoPopup{
		background: #fff;
		padding: 30rpx;
		border-radius: 30rpx 30rpx 0 0;
		overflow: hidden;
		scroll-view{
			max-height: 60vh;
			.content{
				.row{
					display: flex;
					padding: 16rpx 0;
					font-size: 32rpx;
					line-height: 1.7em;
					.label{
						color: #a7a7a7;
						width: 140rpx;
						text-align: right;
						font-size: 30rpx;
					}
					.value{
						flex: 1;
						width: 0;
					}
					.roteBox{
						display: flex;
						align-items: center;
						.score{
							font-size: 26rpx;
							color: #a7a7a7;
							padding-left: 10rpx;
						}
					}
					.tabs{
						display: flex;
						flex-wrap: wrap;
						.tab{
							border: 1px solid #28b389;
							color: #28b389;
							font-size: 22rpx;
							padding: 10rpx 30rpx;
							border-radius: 40rpx;
							line-height: 1em;
							margin: 0 10rpx 10rpx 0;
						}
					}
					.class{
						color: #28b389;
					}
				}
				.copyright{
					font-size: 28rpx;
					padding: 20rpx;
					background: #f6f6f6;
					color: #666;
					border-radius: 10rpx;
					margin: 10rpx 0;
					line-height: 1.6em;
				}
			}
		}
		.popHeader{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.title{
				color:#676767;
			}
			.close{
				padding: 6rpx;
			}
		}
	}
}
</style>
